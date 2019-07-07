
export function authorsNames(names) {
  if(names.length === 1) {
    return names[0]
  }
  else if(names.length === 2) {
    return `${names[0]} and ${names[1]}`
  }
  else {
    const last = names.pop()
    return names.join(', ') + ' and ' + last
  }
}

export const mockResponse = {
  "totalItems": 1,
  "items": [
    {
      "kind": "books#volume",
      "id": "BdZOnStngFkC",
      "etag": "9uasHsiY2xk",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/BdZOnStngFkC",
      "volumeInfo": {
        "title": "test",
        "authors": [
          "Joe Hill"
        ],
        "publisher": "Harper Collins",
        "publishedDate": "2007-05-01",
        "description": "Judas Coyne is a collector of the macabre: a cookbook for cannibals . . . a used hangman's noose . . . a snuff film. An aging death-metal rock god, his taste for the unnatural is as widely known to his legions of fans as the notorious excesses of his youth. But nothing he possesses is as unlikely or as dreadful as his latest purchase, an item he discovered on the Internet: I will sell my stepfather's ghost to the highest bidder . . . For a thousand dollars, Jude has become the owner of a dead man's suit, said to be haunted by a restless spirit. But what UPS delivers to his door in a black heart-shaped box is no metaphorical ghost, no benign conversation piece. Suddenly the suit's previous owner is everywhere: behind the bedroom door . . . seated in Jude's restored Mustang . . . staring out from his widescreen TV. Waiting—with a gleaming razor blade on a chain dangling from one hand . . .",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9780061233241"
          },
          {
            "type": "ISBN_10",
            "identifier": "0061233242"
          }
        ],
        "readingModes": {
          "text": false,
          "image": false
        },
        "pageCount": 528,
        "printType": "BOOK",
        "categories": [
          "Fiction"
        ],
        "averageRating": 4,
        "ratingsCount": 185,
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "preview-1.0.0",
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=BdZOnStngFkC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=BdZOnStngFkC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com/books?id=BdZOnStngFkC&printsec=frontcover&dq=stephen+king&hl=&cd=1&source=gbs_api",
        "infoLink": "http://books.google.com/books?id=BdZOnStngFkC&dq=stephen+king&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Heart_Shaped_Box_LP.html?hl=&id=BdZOnStngFkC"
      },
      "saleInfo": {
        "country": "US",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "US",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED_FOR_ACCESSIBILITY",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=BdZOnStngFkC&hl=&printsec=frontcover&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "Judas Coyne is a collector of the macabre: a cookbook for cannibals . . . a used hangman&#39;s noose . . . a snuff film."
      }
    }
  ]
}