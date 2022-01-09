import React from 'react';
import {Card} from "@mui/material";
import {IArticle} from "../types/article";

interface IOwnProps {
    article: IArticle
}



const ArticleItem: React.FC<IOwnProps> = ({article}) => {
    return (
        <Card style={{marginBottom: 20}}>
            <h2>{article.title}</h2>
        </Card>

    );
};

export default ArticleItem;