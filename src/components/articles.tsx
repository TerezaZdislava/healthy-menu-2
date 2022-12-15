import { articles } from '../data/articles';
import '../styles/components/articles.scss';

function Articles() {
  return (
    <div className="news" id="news">
      <div className="text">
        <h1>New articles</h1>
        <div className="buttons">
          {/* <button (click)="prevNews()"><img className="left" src="../../../assets/icons/arrow-right.svg"></button>
          <button (click)="nextNews()"><img className="right" src="../../../assets/icons/arrow-right.svg"></button> */}
        </div>
      </div>
      <div className="carousel">
        <div className="article-box" id="articleCarousel">
          {articles.map(function (article, i) {
            return (
              <div className="article" key={i}>
                <div
                  className="content"
                  style={{ backgroundImage: `url(${article.image})` }}
                >
                  <span className="date">{article.date}</span>
                  <h3>{article.h1}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Articles;
