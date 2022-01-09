import React from 'react';
import MainLayout from "../../layouts/MainLayout";
import ArticleItem from "../../components/ArticleItem2";
import {IArticle} from "../../types/article";

const Index = () => {
    const articles: IArticle[] = [{title:'title1'},{title:'title2'},{title:'title3'}]
    return (
        <MainLayout>
            <h2>ARTICLES</h2>
            {articles.map(a => <ArticleItem article={a} key={a.title}/>)}
        </MainLayout>
    );
};

export default Index;