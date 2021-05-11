import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './RaggleItems.css'






function RaggleItems({data}) {
    return (
        <div className="card">
            {data.map(item => (
                <Card className="card__main" >
                    <CardContent >
                        <img className="card__image" src={item.imageUrl} alt=""/>
                        <Typography className="card__title">
                            {item.title}
                        </Typography>
                        <Typography className="card__description">
                            {item.description}
                        </Typography>
                        <div className="card__button">
                        <Button variant="contained" color="primary">click me</Button>
                        </div>
                    </CardContent>
                </Card>
            ))}
              
        </div>
    )
}

export default RaggleItems
