export default function (type) {
  if (type.includes('image')) {
    return 'image';
  }
  if (type.includes('html')) {
    return 'html';
  }
  if (type.includes('plain')) {
    return 'text';
  }
  if (type.includes('css')) {
    return 'css';
  }
  if (type.includes('xml')) {
    return 'xml';
  }
  if (type.includes('javascript')) {
    return 'javascript';
  }
  return type;
}
