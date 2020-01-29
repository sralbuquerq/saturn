import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Icon } from '@material-ui/core';
import './style.scss';
import { deleteArticle } from '../../../store/actions';

export function Content() {
    const content = useSelector(state => state.articleActive);
    const dispatch = useDispatch();

    console.log('content', content);

    function del() {
        dispatch(deleteArticle(content));
    }

    return (
        <div className={"content " + content.subject}>
            <div className="head">
                <div className="subject">{ content.subject }</div>
                <div className="title">{ content.title }</div>
                <div className="timer">{ content.timer }</div>
                <div className="delete" onClick={del}>
                    <Icon>clear</Icon>
                </div>
            </div>
            <div className="text">
                { content.text }
            </div>
            <div className="instructions">
                Selecione uma mensagem ao lado para que eu possa te mostrar o meu conteúdo :)
            </div>
        </div>
    )
}