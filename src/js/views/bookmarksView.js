import View from "./view.js";
import previewView from "./previewView.js";
import icons from "url:../../img/icons.svg";

class BookmarksView extends View {
  _parentElement = document.querySelector(".bookmarks__list");
  _errorMessage = "No bookmarks yet, find a nice recipe and bookmark it";
  _message = "";

  addHandlerRender(handler) {
    window.addEventListener("load", handler)
  }
  
  _generateMarkup() {
    // console.log(this._data);
    return this._data.map((bookmark) => previewView.render(bookmark, false)).join("");

  //  Step 1: [bookmark1, bookmark2]
  //  Step 2: previewView.render(bookmark1, false) & previewView.render(bookmark2, false)
  //  Step 3: return 'html1' &                         return 'html2'
  //  Step 4: return 'html1html2'

  }
}

export default new BookmarksView();
