import Image from 'next/image'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import PinDropIcon from '@mui/icons-material/PinDrop';


export default function Cardcar () {
    return (
        <Card sx={{ maxWidth: 250 }}>
        <CardActionArea>
          <Image
            src="/images/audi a4.jpg" 
            width="250" 
            height="200" 
            alt="audi a4"
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              Audi A4
            </Typography>
            <Typography variant="body2" color="black">
              REX FULL 8V ELÉTRICO 4P AUTOMÁTICO
            </Typography>
            <Typography variant="h6" component="div">
              R$: 23.000
            </Typography>
            <Typography variant="h8" color="div">
              <PinDropIcon fontSize='inherit'/>Mogi das cruzes - SP
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    )
        
}