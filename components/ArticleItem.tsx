import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {IArticle} from "../types/article";
import style from '../styles/ArticleItem.module.scss'

interface IOwnProps {
    article: IArticle
}

const ArticleItem: React.FC<IOwnProps> = ({article}) => {
    return (
        <Card sx={{ maxWidth: 365 }} className={style.card}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="280"
                image="/egypt.jpeg"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {article.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
        </Card>
    );
}

export default ArticleItem;
