// Type code here

// let form=document.querySelector("form");

// let registerLs=JSON.parse(localStorage.getItem("register")) || [];


// form.addEventListener("submit",function(event){
//     event.preventDefault();
//     let obj={
//         firstName:form.first.value,
//         lastName:form.last.value,
//         email:form.email.value,
//         password:form.pass.value,

//     }
//     if(obj.firstName == "" || obj.lastName=="" || obj.email=="" || obj.password==""){
//         alert("Not empty Field required");
//         return
//     }
//     registerLs.push(obj);
//     localStorage.setItem("register",JSON.stringify(registerLs))
    
//     window.location.href="home.html"
    
// })-----------------------------------------------------------------------------------------------------------------------------------------------------------------
// 


import React, { useState } from "react";
import {
Box,
Button,
Drawer,
TextField,
Select,
MenuItem,
} from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const Details = (props) => {
const { onClose, selectedValue } = props;
const [open, setOpen] = useState(false);
const [inputFields, setInputFields] = useState([{ id: 1, value: "" }]);

const handleClickOpen = () => {
setOpen(true);
};

const handleClose = () => {
setOpen(false);
};

const handleAddInput = () => {
const newInputFields = [...inputFields];
newInputFields.push({ id: newInputFields.length + 1, value: "" });
setInputFields(newInputFields);
};

const handleInputChange = (id, event) => {
const newInputFields = [...inputFields];
const index = newInputFields.findIndex((field) => field.id === id);
if (index !== -1) {
newInputFields[index].value = event.target.value;
setInputFields(newInputFields);
}
};

const handleSave = () => {
// Log input field data and select box value to the console
console.log("Input Field Data:", inputFields);
};

return (
<>
<Box>
<Button variant="outlined" onClick={handleClickOpen}>
Modal
</Button>
<Drawer open={open} onClose={handleClose} style={{ width: "40%" }}>
<HighlightOffIcon
onClick={handleClose}
style={{ cursor: "pointer" }}
/>
{inputFields.map((field) => (
<TextField
key={field.id}
id={`standard-basic-${field.id}`}
label={`Standard ${field.id}`}
variant="standard"
value={field.value}
onChange={(e) => handleInputChange(field.id, e)}
/>
))}
{/_ New select box _/}

          <AddCircleIcon
            onClick={handleAddInput}
            style={{ cursor: "pointer" }}
          />
          <Button variant="contained" onClick={handleSave}>
            Save
          </Button>
        </Drawer>
      </Box>
    </>

);
};

export default Details;


