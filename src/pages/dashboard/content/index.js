import React from 'react';
import { useSelector } from 'react-redux';
import './style.scss';

export function Content() {
    const content = useSelector(state => state.articleActive);
    return (
        <div className={"content " + content.subject}>
            <div className="head">
                <div className="subject">{ content.subject }</div>
                <div className="title">{ content.title }</div>
                <div className="timer">{ content.timer }</div>
            </div>
            <div className="text">
                { content.text }
            </div>
        </div>
    )
}