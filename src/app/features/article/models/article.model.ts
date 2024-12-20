import { Profile } from "../../profile/models/profile.model";

export interface Article {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: Profile;
}

const profile = {username: "u1", bio: "dadds", image: "", following: false}

export const mockArticles: Article[] = [
  {slug: "a1", title: "article1", description: "desc", body: "body", tagList: [], createdAt: "2024-23-02", updatedAt: "2024-23-02", favorited: false, favoritesCount: 0, author: profile},
  {slug: "a1", title: "article1", description: "desc", body: "body", tagList: [], createdAt: "2024-23-02", updatedAt: "2024-23-02", favorited: false, favoritesCount: 0, author: profile},
  {slug: "a1", title: "article1", description: "desc", body: "body", tagList: [], createdAt: "2024-23-02", updatedAt: "2024-23-02", favorited: false, favoritesCount: 0, author: profile},
  {slug: "a1", title: "article1", description: "desc", body: "body", tagList: [], createdAt: "2024-23-02", updatedAt: "2024-23-02", favorited: false, favoritesCount: 0, author: profile},
  {slug: "a1", title: "article1", description: "desc", body: "body", tagList: [], createdAt: "2024-23-02", updatedAt: "2024-23-02", favorited: false, favoritesCount: 0, author: profile},
  {slug: "a1", title: "article1", description: "desc", body: "body", tagList: [], createdAt: "2024-23-02", updatedAt: "2024-23-02", favorited: false, favoritesCount: 0, author: profile},
  {slug: "a1", title: "article1", description: "desc", body: "body", tagList: [], createdAt: "2024-23-02", updatedAt: "2024-23-02", favorited: false, favoritesCount: 0, author: profile},
  {slug: "a1", title: "article1", description: "desc", body: "body", tagList: [], createdAt: "2024-23-02", updatedAt: "2024-23-02", favorited: false, favoritesCount: 0, author: profile},
  {slug: "a1", title: "article1", description: "desc", body: "body", tagList: [], createdAt: "2024-23-02", updatedAt: "2024-23-02", favorited: false, favoritesCount: 0, author: profile},
  {slug: "a1", title: "article1", description: "desc", body: "body", tagList: [], createdAt: "2024-23-02", updatedAt: "2024-23-02", favorited: false, favoritesCount: 0, author: profile},
  {slug: "a1", title: "article1", description: "desc", body: "body", tagList: [], createdAt: "2024-23-02", updatedAt: "2024-23-02", favorited: false, favoritesCount: 0, author: profile},
  {slug: "a1", title: "article1", description: "desc", body: "body", tagList: [], createdAt: "2024-23-02", updatedAt: "2024-23-02", favorited: false, favoritesCount: 0, author: profile},
  {slug: "a1", title: "article1", description: "desc", body: "body", tagList: [], createdAt: "2024-23-02", updatedAt: "2024-23-02", favorited: false, favoritesCount: 0, author: profile},
  {slug: "a1", title: "article1", description: "desc", body: "body", tagList: [], createdAt: "2024-23-02", updatedAt: "2024-23-02", favorited: false, favoritesCount: 0, author: profile},
  {slug: "a1", title: "article1", description: "desc", body: "body", tagList: [], createdAt: "2024-23-02", updatedAt: "2024-23-02", favorited: false, favoritesCount: 0, author: profile},
  {slug: "a1", title: "article1", description: "desc", body: "body", tagList: [], createdAt: "2024-23-02", updatedAt: "2024-23-02", favorited: false, favoritesCount: 0, author: profile},
  {slug: "a1", title: "article1", description: "desc", body: "body", tagList: [], createdAt: "2024-23-02", updatedAt: "2024-23-02", favorited: false, favoritesCount: 0, author: profile},
  {slug: "a1", title: "article1", description: "desc", body: "body", tagList: [], createdAt: "2024-23-02", updatedAt: "2024-23-02", favorited: false, favoritesCount: 0, author: profile},
  {slug: "a1", title: "article1", description: "desc", body: "body", tagList: [], createdAt: "2024-23-02", updatedAt: "2024-23-02", favorited: false, favoritesCount: 0, author: profile},
  {slug: "a1", title: "article1", description: "desc", body: "body", tagList: [], createdAt: "2024-23-02", updatedAt: "2024-23-02", favorited: false, favoritesCount: 0, author: profile},
  {slug: "a1", title: "article1", description: "desc", body: "body", tagList: [], createdAt: "2024-23-02", updatedAt: "2024-23-02", favorited: false, favoritesCount: 0, author: profile},
  {slug: "a1", title: "article1", description: "desc", body: "body", tagList: [], createdAt: "2024-23-02", updatedAt: "2024-23-02", favorited: false, favoritesCount: 0, author: profile},
  {slug: "a1", title: "article1", description: "desc", body: "body", tagList: [], createdAt: "2024-23-02", updatedAt: "2024-23-02", favorited: false, favoritesCount: 0, author: profile},
  {slug: "a1", title: "article1", description: "desc", body: "body", tagList: [], createdAt: "2024-23-02", updatedAt: "2024-23-02", favorited: false, favoritesCount: 0, author: profile},
  {slug: "a1", title: "article1", description: "desc", body: "body", tagList: [], createdAt: "2024-23-02", updatedAt: "2024-23-02", favorited: false, favoritesCount: 0, author: profile},
  {slug: "a1", title: "article1", description: "desc", body: "body", tagList: [], createdAt: "2024-23-02", updatedAt: "2024-23-02", favorited: false, favoritesCount: 0, author: profile},
]
