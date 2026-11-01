import './news.css';
import { INews, NewsSelectors, ReadonlyArticles } from '../../../types';

class News implements INews {
    private readonly maxItems: number = 10;
    private readonly defaultImage: string = 'img/news_placeholder.jpg';

    draw(data: ReadonlyArticles) {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector<HTMLTemplateElement>(NewsSelectors.Template);
        const newsContainer = document.querySelector<HTMLElement>(NewsSelectors.Container);
        if (!newsItemTemp || !newsContainer) return;

        news.forEach((item, idx) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as HTMLElement;

            if (idx % 2) newsClone.querySelector<HTMLElement>(NewsSelectors.Item)?.classList.add('alt');

            const photo = newsClone.querySelector<HTMLElement>(NewsSelectors.Photo);
            if (photo) {
                photo.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
            }
            const author = newsClone.querySelector<HTMLElement>(NewsSelectors.Author);
            if (author) author.textContent = item.author || item.source.name;
            const date = newsClone.querySelector<HTMLElement>(NewsSelectors.Date);
            if (date) {
                date.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
            }
            const title = newsClone.querySelector<HTMLElement>(NewsSelectors.Title);
            if (title) title.textContent = item.title;

            const source = newsClone.querySelector<HTMLElement>(NewsSelectors.Source);
            if (source) source.textContent = item.source.name;

            const content = newsClone.querySelector<HTMLElement>(NewsSelectors.Content);
            if (content) content.textContent = item.description;

            const readMore = newsClone.querySelector<HTMLAnchorElement>(NewsSelectors.ReadMore);
            if (readMore) readMore.setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        newsContainer.innerHTML = '';
        newsContainer.appendChild(fragment);
    }
}

export default News;
