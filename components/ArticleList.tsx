import * as React from 'react';
import {IArticle} from "../types/article";
import ArticleItem from "./ArticleItem";
import style from '../styles/ArticleList.module.scss'

const ArticleList: React.FC = (props) => {

    const articles: IArticle[] = [{title:'title1'},{title:'title2'},{title:'title3'}, {title:'title1'},{title:'title2'},{title:'title3'}, {title:'title1'},{title:'title2'},{title:'title3'}]
    return (
        <>
            <h2>ARTICLES</h2>
            <div className={style.list}>
                {articles.map(a => <ArticleItem article={a} key={a.title}/>)}
            </div>
        </>

    );
}

export default ArticleList;
