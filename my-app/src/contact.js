const contact=[
    {   id:1,
        inputHeading:"First Name",
        placeholder:"Please enter the first name...",
        name:"fname",
        type:"text"
    },
    {   id:2,
        inputHeading:"Last Name",
        placeholder:"Please enter the last name...",
        name:"lname",
        type:"text"
    },
    {   id:3,
        inputHeading:"Email",
        placeholder:"Please enter the email...",
        name:"email",
        type:"email",
        pattern:"[^@\s]+@[^@\s]+\.[^@\s]+"
    },
    {   id:4,
        inputHeading:"Mobile Number",
        placeholder:"Please enter the mobile number...",
        name:"phone",
        type:"tel",
        pattern:"[789][0-9]{9}"
    },
]
export default contact