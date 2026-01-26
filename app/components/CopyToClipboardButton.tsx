interface DownloadButtonProps {
  getDownloadDataUrl: () => string;
}

export default function CopyToClipboardButton(props: DownloadButtonProps) {
  const handleExport = async () => {
    const uri = props.getDownloadDataUrl();
    const response = await fetch(uri);
    const image = await response.blob();
    const item = new ClipboardItem({
      [image.type]: image,
    });
    await navigator.clipboard.write([item]);
    alert("Copied to clipboard");
  };

  return <button onClick={handleExport}>Copy to clipboard</button>;
}
