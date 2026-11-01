
export interface Source {
  id: string;
  name: string;
  description?: string;
  url?: string;
  category?: string;
  language?: string;
  country?: string;
}

export interface SourcesResponse {
    status: string;
    sources: Source[];
}

export interface Article {
    source: {
        id: string | null;
        name: string;
    };
    author: string | null;
    title: string;
    description: string;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string;
}

export interface NewsResponse {
    status: string;
    totalResults: number;
    articles: Article[];
    sources: Source[];
}

export interface IAppView {
    drawNews(data?: Readonly<NewsResponse>): void;
    drawSources(data?: Readonly<SourcesResponse>): void;
}

export type ReadonlyArticles = ReadonlyArray<Article>;
export interface INews {
  draw(data: ReadonlyArticles): void;
}

export enum NewsSelectors {
  Template = '#newsItemTemp',
  Container = '.news',
  Item = '.news__item',
  Photo = '.news__meta-photo',
  Author = '.news__meta-author',
  Date = '.news__meta-date',
  Title = '.news__description-title',
  Source = '.news__description-source',
  Content = '.news__description-content',
  ReadMore = '.news__read-more a',
}

export interface ISources {
    draw(data: ReadonlyArray<Source>): void;
}

export enum SourceSelectors {
  Template = '#sourceItemTemp',
  Container = '.sources',
  ItemName = '.source__item-name',
  Item = '.source__item',
}

export type SourceCallback = (data: Readonly<SourcesResponse>) => void;
export type NewsCallback = (data: Readonly<NewsResponse>) => void;

export enum Endpoints {
  Sources = 'sources',
  Everything = 'everything',
}

export type Options = Partial<Record<string, string>>;

export interface GetRespParams {
  endpoint: string;
  options?: Options; 
}

export enum HttpMethod {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
}

export interface IApp {
    start(): void;
}