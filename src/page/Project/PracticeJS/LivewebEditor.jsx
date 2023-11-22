import React, { useState } from 'react';
import './web.css';
import {Sidebar} from '../../../components/SideBar';

function LiveWebEditor() {
  const [htmlCode, setHtmlCode] = useState('');
  const [cssCode, setCssCode] = useState('');
  const [jsCode, setJsCode] = useState('');
  const [j, setJ] = useState(0);
  const [iframeContent, setIframeContent] = useState('');

  const updateIframe = () => {
    const text = htmlCode + '<style>' + cssCode + '</style>' + '<script>' + jsCode + '</script>';
    setIframeContent(text);
  };

  const [iframeWidth, setIframeWidth] = useState(1000);

const handleResize = (e, { size }) => {
  setIframeWidth(size.width);
};


  const handleCodeChange = (codeType, event) => {
    if (j !== 1) {
      const pos = event.target.selectionStart;
      const val = [...event.target.value];
      const char = val.slice(pos - 1, pos)[0];
      const closeChar = closeChars.get(char);
      if (closeChar) {
        val.splice(pos, 0, closeChar);
        if (codeType === 'html') {
          setHtmlCode(val.join(''));
        } else if (codeType === 'css') {
          setCssCode(val.join(''));
        } else if (codeType === 'js') {
          setJsCode(val.join(''));
        }

        // Update the selection position
        event.target.selectionEnd = pos;
      }
    }
    setJ(0);
  };

  const saveFile = () => {
    const fileName = prompt('What is the name of the file?', '');
    if (fileName != null && (htmlCode !== '' || cssCode !== '' || jsCode !== '')) {
      const text =
        htmlCode + '<style>' + cssCode + '</style>' + '<script>' + jsCode + '</script>';
      download(text, fileName + '.html', 'text/plain');
    } else {
      alert('Please fill all the fields');
    }
  };

  const runCode = () => {
    updateIframe();
  };

  const download = (data, filename, type) => {
    const userFile = new Blob([data], { type: type });
    const a = document.createElement('a');
    const url = URL.createObjectURL(userFile);
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(function () {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }, 0);
  };

  const closeChars = new Map([
    ['{', '}'],
    ['[', ']'],
    ['(', ')'],
    ['<', '>'],
    ['"', '"'],
    ["'", "'"],
  ]);

  return (
    

    <div className="split-container">

      <div className="container-practicejs">

      <div className=' sidebar-app text-white absolute top-5 left-5 ' style={{ opacity: '1'}}>
                <Sidebar />
      </div>
        <button id="btn" onClick={saveFile}>
          Save File
        </button>
        <button id="runBtn" onClick={runCode}>
          Run
        </button>
        <textarea
          id="htmlCode"
          className="code-textarea"
          placeholder="Type HTML code here"
          spellCheck="false"
          value={htmlCode}
          onChange={(e) => {
            handleCodeChange('html', e);
            setHtmlCode(e.target.value);
          }}
        ></textarea>
        <textarea
          id="cssCode"
          className="code-textarea"
          placeholder="Type CSS code here"
          spellCheck="false"
          value={cssCode}
          onChange={(e) => {
            handleCodeChange('css', e);
            setCssCode(e.target.value);
          }}
        ></textarea>
        <textarea
          id="javascriptCode"
          className="code-textarea"
          placeholder="Type JavaScript code here"
          spellCheck="false"
          value={jsCode}
          onChange={(e) => {
            handleCodeChange('js', e);
            setJsCode(e.target.value);
          }}
        ></textarea>
      </div>


      <div className="iframe-container">
        <h1>Here is your output...</h1>
        <iframe id="viewer" srcDoc={iframeContent}></iframe>
      </div>
    </div>
    
  );
}

export default LiveWebEditor;
