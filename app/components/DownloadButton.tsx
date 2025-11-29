function downloadURI(uri: string, name: string) {
  const link = document.createElement("a");
  link.download = name;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

interface DownloadButtonProps {
  getDownloadDataUrl: () => string;
}

export default function DownloadButton(props: DownloadButtonProps) {
  const handleExport = () => {
    const uri = props.getDownloadDataUrl();
    downloadURI(uri, "triangle.png");
  };

  return <button onClick={handleExport}>Download</button>;
}
