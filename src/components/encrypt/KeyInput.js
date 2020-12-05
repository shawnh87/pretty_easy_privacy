import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import DeleteOutlineSharpIcon from "@material-ui/icons/DeleteOutlineSharp";
import IconButton from "@material-ui/core/IconButton";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const openpgp = require("openpgp");

const useStyles = makeStyles((theme) => ({
  keyHead: {
    color: "rgba(0, 0, 0, 0.54)",
  },
}));

const InFile = (props) => {

  const handleDelete = () => {
    props.setUploadedFile(null);
    props.setFileMetaData(null);
  };
  const selectedFile = props.fileMetaData && (
    <>
      <FormLabel>{`Selected: ${props.fileMetaData.name}`}</FormLabel>
      <IconButton onClick={handleDelete}>
        <DeleteOutlineSharpIcon />
      </IconButton>
    </>
  );
  return (
    <Box>
      <FormLabel component="legend">
        Select RSA Key:
      </FormLabel>
      <Box mt={1}>
        <Button
          onClick={() => document.getElementById("keyInput").click()}
          variant="outlined"
          color="secondary"
        >
          Key Browse
        </Button>{" "}
        {selectedFile}
        {props.err.err && (
          <p
            class="MuiFormHelperText-root MuiFormHelperText-contained Mui-error Mui-required"
            id="pw-in-helper-text"
          >
            {props.err.message}
          </p>
        )}
        <input
          id="keyInput"
          type="file"
          style={{ visibility: "hidden" }}
          onChange={props.readFile}
        />
      </Box>
    </Box>
  );
};

const KeyInput = (props) => {
  const classes = useStyles();
  let resetErr = { err: false, key: false, message: false };

  const [byteKey, setByteKey] = useState();
  const [inputTypeSelect, setInputTypeSelect] = useState("byte");
  const [formTextInputError, setFormTextInputError] = useState(resetErr);
  const [formByteInputError, setFormByteInputError] = useState(resetErr);
  const [fileMetaData, setFileMetaData] = useState();

  const handleTextInput = (e) => {
    setByteKey(e.target.value);
  };

  const handleInputType = (e) => {
    setInputTypeSelect(e.target.value);
  };

  const readKey = (e) => {
    // setFilerLoader(true);
    var file = e.target.files[0];
    if (!file) return;
    var reader = new FileReader();
    // reader.readAsArrayBuffer(file);
    reader.readAsText(file);
    setFileMetaData({ name: file.name, type: file.type.replace("/", "_") });
    reader.onload = () => {
      setByteKey(reader.result);
    };
    reader.onerror = function () {
      console.log("error");
    };
    //TODO fire ERROR
  };

  let inputType;
  if (inputTypeSelect == "text") {
    inputType = (
      <TextField
        helperText={formTextInputError.err && formTextInputError.message}
        className={classes.textBox}
        fullWidth={true}
        error={formTextInputError.err}
        id="outlined-multiline-static"
        label={"RSA Key Input"}
        multiline
        rows={10}
        onChange={handleTextInput}
        variant="outlined"
      />
    );
  } else {
    inputType = (
      <InFile
        buttonLabel={"key browse"}
        fileMetaData={fileMetaData}
        err={formByteInputError}
        formByteInputError={formByteInputError}
        readFile={readKey}
        setUploadedFile={setByteKey}
        setFileMetaData={setFileMetaData}
      />
    );
  }

  const handleSubmit = async () => {
    //TODO need to split out?
    console.log("submit");
    setFormTextInputError(resetErr);
    setFormByteInputError(resetErr);
    let err, rsaKey;
    if (!byteKey || byteKey === "") {
      if (inputType === "text") {
       
        setFormTextInputError({
          ...formTextInputError,
          err: true,
          message: "Key Text Required",
        });
      } else {
        setFormByteInputError({
          ...formByteInputError,
          err: true,
          message: "Key File Required",
        });
      }
      err = true;
    } else {
      rsaKey = (await openpgp.key.readArmored(byteKey)).keys[0];
      if (typeof rsaKey == "undefined") {
        if (inputType === "text") {
          setFormTextInputError({
            err: true,
            key: true,
            message: "Invalid RSA Key",
          });
        } else {
          setFormByteInputError({
            err: true,
            key: true,
            message: "Invalid RSA Key",
          });
        }
        err = true;
      } else {
        err = false;
      }
    }
    //continue to snag error in other input
    props.handleKeyEncrypt(rsaKey, err);
  };

  return (
    <Box>
      <Box pt={3} mt={3}>
        <div className={classes.keyHead}>
          <h3>Key Input</h3>
        </div>
        <FormControl component="fieldset">
          <FormLabel component="legend">Key Format</FormLabel>
          <RadioGroup
            row
            aria-label="position"
            name="position"
            value={inputTypeSelect}
            defaultValue="top"
            onChange={handleInputType}
          >
            <FormControlLabel
              value="byte"
              control={<Radio color="secondary" />}
              label="File"
              labelPlacement="start"
              // onChange={() => setInputTypeSelect(1)}
            />
            <FormControlLabel
              value="text"
              control={<Radio color="primary" />}
              label="Text"
              labelPlacement="start"
              // onChange={() => setInputTypeSelect(0)}
            />
          </RadioGroup>
        </FormControl>
      </Box>
      <Box>
        <FormLabel
          component="legend"
       >
        </FormLabel>
        <Box mt={3}>{inputType}</Box>
      </Box>
      <Box pt={3}>
        <Button
          variant="contained"
          color={"primary"}
          onClick={handleSubmit}
        >
          Encrypt!
        </Button>
      </Box>
    </Box>
  );
};

export default KeyInput;