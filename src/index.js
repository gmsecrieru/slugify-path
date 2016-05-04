import { slugify } from 'underscore.string';

function slugifyPath(str, pieceReplaceFilter = null, pathSeparator = '/') {
  const endsWithHash = str.match(/\#\S*$/);
  let transformedStr = endsWithHash ? str.replace(endsWithHash[0], '') : str;

  transformedStr = transformedStr.split(pathSeparator).filter((piece) => {
    return !!piece;
  }).map((piece) => {
    let filteredPiece = piece;
    if (pieceReplaceFilter) {
      filteredPiece = piece.replace(pieceReplaceFilter, '');
    }

    return slugify(filteredPiece);
  }).join(pathSeparator);

  return (endsWithHash ? `${transformedStr}${endsWithHash[0]}` : transformedStr);

}

export default slugifyPath;
