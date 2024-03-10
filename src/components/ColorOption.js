export default function ColorOption({color}) {
  return <option value={color} style={{backgroundColor: color}}>{color}</option>
}