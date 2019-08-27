import store from "../js/store/index";
import { addArticle, deleteArticle } from "../js/actions/index";

window.store = store;
window.addArticle = addArticle;
window.deleteArticle = deleteArticle;