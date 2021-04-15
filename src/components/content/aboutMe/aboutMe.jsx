import React from 'react';
import Class from "./aboutMe.module.css";

const AboutMe = (props) => {

    return (
        <div className={Class.wrapper}>
              <input className={Class.hide} id="hd-1" type="checkbox"></input>
                <label for="hd-1">Нажмите здесь, чтобы прочитать больше о HTML!</label>
                <div>
                    HTML — стандартный язык разметки документов во Всемирной паутине. Большинство веб-страниц содержат описание разметки на языке HTML (или XHTML). Язык HTML интерпретируется браузерами и отображается в виде документа в удобной для человека форме..
                </div>
                <br />
                <br />
                <input className={Class.hide} id="hd-2" type="checkbox"></input>
                <label for="hd-2">Нажмите здесь, чтобы прочитать больше о CSS!</label>
                <div>
                        CSS - CSS Cascading Style Sheets — каскадные таблицы стилей — формальный язык описания внешнего вида документа, написанного с использованием языка разметки. Преимущественно используется как средство описания, оформления внешнего вида веб-страниц, написанных с помощью языков разметки HTML и XHTML, но может также применяться к любым XML-документам, например, к SVG или XUL.
                </div>  
        </div>
    );
}

export default AboutMe;