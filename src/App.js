import React, { useState } from 'react';
import FilerobotImageEditor, {
  TABS,
  TOOLS,
} from 'react-filerobot-image-editor';

function App() {
  const [isImgEditorShown, setIsImgEditorShown] = useState(false);
  const [imageUrl, setImageUrl] = useState("")

  const openImgEditor = (event) => {
    setImageUrl(URL.createObjectURL(event.target.files[0]))
    setIsImgEditorShown(true);
  };

  const closeImgEditor = () => {
    setIsImgEditorShown(false);
  };

  return (
    <div style={{ height: '80vh' }}>
      <input
          type="file"
          onChange={(e) => openImgEditor(e)}
        />
      {/* <button onClick={openImgEditor}>Open Filerobot image editor</button> */}
          {isImgEditorShown && (
          <FilerobotImageEditor
              source={imageUrl}
              onSave={(editedImageObject, designState) => console.log('saved', editedImageObject, designState)}
              onClose={closeImgEditor}
              annotationsCommon={{
                fill: '#ff0000'
              }}
              Text={{ text: 'Filerobot...' }}
              tabsIds={[TABS.ADJUST, TABS.ANNOTATE, TABS.WATERMARK, TABS.FILTERS, TABS.FINETUNE, TABS.RESIZE]} // or {['Adjust', 'Annotate', 'Watermark']}
              defaultTabId={TABS.ANNOTATE} // or 'Annotate'
              defaultToolId={TOOLS.TEXT} // or 'Text'
            />
          )}
    </div>
  );
}

export default App;
