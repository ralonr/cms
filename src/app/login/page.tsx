import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

export default function Home() {
  return (
    <Card sx={{ maxWidth: 275, margin: 'auto',  }}>
      <CardContent>
        <Typography variant="h6" component="div">
          Login
        </Typography>
        <div>
          <TextField
            required
            id="standard-required"
            label="Username"
            component="div"
            variant="standard"
          />
        </div>
        <div>
          <TextField
            disabled
            id="standard-disabled"
            type="password"
            component="div"
            label="Password"
            variant="standard"
          />
        </div>
      </CardContent>
      <CardActions>
        <Button size="small">Login</Button>
      </CardActions>
    </Card>
  );
}
