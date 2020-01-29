import React from 'react';
import './style.scss';
import Icon from '@material-ui/core/Icon';
import { useSelector, useDispatch } from 'react-redux';
import { activeArticle } from './../../../store/actions';
import axios from 'axios';
import { getArticles } from './../../../store/actions';

export function List() {
    const list = useSelector(state => state.articles);
    const started = useSelector(state => state.started);
    const dispatch = useDispatch();
    console.log(list);
    // console.log(list.find(article => article === {
    //             title: 'Aquele título maroto...',
    //             subject: 'esports',
    //             timer: '10/02/1993 18:30',
    //             active: false
    //         }).active = true);

    // state = {
    //     articles: [{
    //         title: 'Aquele título maroto...',
    //         subject: 'esports',
    //         timer: '10/02/1993 18:30'
    //     }, {
    //         title: 'Aquele título maroto...',
    //         subject: 'football',
    //         timer: '10/02/1993 18:30'
    //     }, {
    //         title: 'Aquele título maroto...',
    //         subject: 'soccer',
    //         timer: '10/02/1993 18:30'
    //     }, {}]
    // };

    // render() {
        

    if (!started) {
        setTimeout(() => {
            axios.get('http://localhost:4000/articles')
            .then(response => dispatch(getArticles(response.data)))
            .catch(er => console.error(er));
            console.log('oi', started);;
            console.log('oi', started);
        }, 2000);
    }

        return (
            <div className="list">
                {list.map((article, i) => (
                    <Item data={article} key={i} />
                ))}
            </div>
        )
    // }
}

export function Item(props) {
    const state = props.data;
    const dispatch = useDispatch();

    function active() {
        dispatch(activeArticle(state));
    }

    function classNames() {
        return state.subject +
            (state.title === undefined ? " hide" : " show") +
            (state.active ? " active" : "");
    }

    console.log(state);
    return (
        <div
            className={"item " + classNames()}
            onClick={ () => active() }
        >
            <div className="title">
                { state.title }
            </div>
            <div className="info">
                <div className={"subject " + state.subject}>
                    <Icon>sports_{ state.subject }</Icon>{ state.subject }
                </div>
                <div className={"timer" + (state.timer === undefined ? " hide" : "")}>
                    <Icon>access_time</Icon> { state.timer }
                </div>
            </div>
        </div>
    )
}