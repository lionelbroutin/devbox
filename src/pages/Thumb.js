console.log(window.ipcRenderer);

const Thumb = () => {
  const handleSubmit = () => {
    console.log("submit");
    // dialog.showErrorBox("Error Box", "Fatal Error");
  };

  return (
    <form>
      <h1>Créer miniatures</h1>
      <fieldset>
        <h2>emplacement du fichier</h2>
      </fieldset>
      <fieldset>
        <h2>Taille</h2>
        <label htmlFor="width">Largeur en pixels</label>
        <input type="text" name="width" id="width" />
        <label htmlFor="height">Hauteur en pixels</label>
        <input type="text" name="height" id="height" />
      </fieldset>
      <fieldset>
        <h2>Format</h2>
        <label htmlFor="format_default">Format d'origine</label>
        <input type="radio" name="format" checked id="format_default" value="default" />
        <label htmlFor="format_webp">WebP</label>
        <input type="radio" name="format" id="format_webp" />
        <label htmlFor="format_jpg">jpg</label>
        <input type="radio" name="format" id="format_jpg" />
        <label htmlFor="format_png">png</label>
        <input type="radio" name="format" id="format_png" />
      </fieldset>
      <fieldset>
        <h2>rotation automatique</h2>

        <label htmlFor="rotation_yes">oui</label>
        <input type="radio" name="rotation" checked id="rotation_yes" />
        <label htmlFor="rotation_no">non</label>
        <input type="radio" name="rotation" id="rotation_no" />
      </fieldset>
      <fieldset>
        <h2>Emplacement de destination</h2>
        <label htmlFor="thumb_name">Nom du dossier</label>
        <input type="text" default-value="thumb" name="thumb_name" id="thumb_name" />
        <label htmlFor="folder_dest">emplacement de destination</label>
        <input type="file" name="folder_dest" id="folder_dest" />
      </fieldset>
      <button type="button" id="test" onClick={() => handleSubmit()}>
        C'est parti
      </button>
    </form>
  );
};

export default Thumb;
