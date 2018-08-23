import React, { Component } from 'react';
import { Row, Col, Button } from 'antd';
import ArticleCard from '../common/articleCard'
import { Link } from 'routes'
const cover = 'static/images/cover.jpg'
const cover1 = 'static/images/cover1.jpg'
const footerCover = 'static/images/cover-footer.svg'
const highlightArticles = [
    {
        type: "INVESMENT",
        date: 'May 24, 2018',
        title: "Which debt mutual fund scheme is ideal to invest for a year?"
    }
]

const lastestArticles = [
    {
        image: cover,
        type: "SAVING",
        date: 'May 24, 2018',
        title: "Which debt mutual fund scheme is ideal to invest for a year?"
    },
    {
        image: cover,
        type: "INVESMENT",
        date: 'May 24, 2018',
        title: "Which debt mutual fund scheme is ideal to invest for a year?"
    },
    {
        image: cover,
        type: "INVESMENT",
        date: 'May 24, 2018',
        title: "Which debt mutual fund scheme is ideal to invest for a year?"
    },
    {
        image: cover,
        type: "INVESMENT",
        date: 'May 24, 2018',
        title: "Which debt mutual fund scheme is ideal to invest for a year?"
    }
]

class Learn extends Component {
    renderHighlightArticle(highlightArticles) {
        return highlightArticles.map((item, index) => {
            return <div key={index} className="article-detail">
                <div className="article-info">
                    <div className="article-header">
                        <div className="article-type ButtonNormalBlueLeft">{item.type}</div>
                        <div >{item.date}</div>
                    </div>
                    <h3 className="article-title H3BlackLeft">
                        {item.title}
                    </h3>
                </div>

            </div>
        })
    }
    renderLastestArticle(lastestArticles) {
        return lastestArticles.map((item, index) => {
            return <Col lg={12} mg={12} key={index} >
                <ArticleCard item={item} />
            </Col>
        })
    }
    render() {

        return (
            <div>
                <div className="main-wrapper body-content learn-container">
                    <h3 className="learn-title H3BlackLeft">
                        Learn
                </h3>
                    <div className="highlight-article-container">
                        {
                            this.renderHighlightArticle(highlightArticles)
                        }

                    </div>

                    <div className="lastest-article-container">
                        <h4 className="lastest-label H4BlackLeft">
                            Lastest Articles
                </h4>
                        <Row gutter={40} className="lastest-articles">
                            {
                                this.renderLastestArticle(lastestArticles)
                            }

                        </Row>
                        <div className="show-more-button">
                            <Button className="ButtonNormalBlackCenter">SHOW MORE</Button>
                        </div>
                    </div>


                </div>
                <div className="subcribe-container">
                    <div className="subcribe-content">
                        <h4 className="subcribe-title H4WhiteCenter">Stay Up to Date with My Nest Egg</h4>
                        <div className="subcribe-desc Body2RegularWhiteCenter">{`Be the first to hear about market updates, personal finance tips
             and My Nest Egg news.`}</div>
                        <div className="subcribe-button">
                            <Button type="primary" className="ButtonNormalWhiteCenter">SUBCRIBE</Button>

                        </div>
                    </div>
                    <div className="subcribe-image">
                        <img alt="cover" src={footerCover} />
                    </div>


                </div>
            </div >
        )


    }
}

export default Learn