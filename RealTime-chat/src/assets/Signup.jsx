import { Card, TextField, Typography } from "@mui/material";
import { shadows } from '@mui/system';
import Button from '@mui/material/Button';
function Signup(){
    return <div style={{display:'flex',justifyContent:'center'}}>
        <Card  style={{width:'400px',
       display:'flex',
       alignItems:'center',
       justifyContent:'center',
       padding:'100px',
       marginTop:'100px',
       borderRadius:'10px'
       }}>
        <form>
            <Typography variant="h4" style={{display:'flex',
            alignItems:'center', margin:'10px'}}>Sign up below</Typography>
                <Typography>email</Typography>
                <TextField id="outlined-basic" label="email" variant="outlined" ></TextField>
                <Typography style={{marginTop:'20px'}}>password</Typography>
                <TextField id="outlined-basic"  variant="outlined"  label="Password" type="password" autoComplete="current-password" ></TextField>
                <br></br>
                <Button variant="contained" style={{marginTop:'20px'}}>Sign up</Button>
            </form>
        </Card>
    </div>
    
}
export default Signup;