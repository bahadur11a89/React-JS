export default function MsgBox({userName, textcolor}) {
    let style = {color: textcolor};
    return (
        <h1 style={{color: textcolor}}>Hello : {userName}</h1>
    );
}