import { Folder as FolderIcon, FileIcon, Trash2Icon } from "lucide-react";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { deleteFile } from "~/server/actions";
import type { folders_table, files_table } from "~/server/db/schema";

export function FileRow(props: { file: typeof files_table.$inferSelect }) {
  const { file } = props;
  return (
    <li
      key={file.id}
      className="group hover:bg-gray-800 px-6 py-4 transition-colors"
    >
      <div className="grid grid-cols-12 items-center gap-4">
        <div className="col-span-6 flex items-center">
          <a
            href={file.url}
            className="flex items-center text-gray-200 hover:text-blue-400 transition-colors font-medium"
            target="_blank"
          >
            <FileIcon className="mr-3 text-gray-500 group-hover:text-blue-400" size={20} />
            {file.name}
          </a>
        </div>
        <div className="col-span-2 text-gray-500 text-sm">{"file"}</div>
        <div className="col-span-3 text-gray-500 text-sm">{file.size}</div>
        <div className="col-span-1 text-gray-500">
          <Button
            variant="ghost"
            onClick={() => deleteFile(file.id)}
            aria-label="Delete file"
            className="text-gray-500 hover:text-red-400 hover:bg-red-900/20"
          >
            <Trash2Icon size={18} />
          </Button>
        </div>
      </div>
    </li>
  );
}

export function FolderRow(props: {
  folder: typeof folders_table.$inferSelect;
}) {
  const { folder } = props;
  return (
    <li
      key={folder.id}
      className="group hover:bg-gray-800 px-6 py-4 transition-colors"
    >
      <div className="grid grid-cols-12 items-center gap-4">
        <div className="col-span-6 flex items-center">
          <Link
            href={`/f/${folder.id}`}
            className="flex items-center text-gray-200 hover:text-blue-400 transition-colors font-medium"
          >
            <FolderIcon className="mr-3 text-gray-500 group-hover:text-blue-400" size={20} />
            {folder.name}
          </Link>
        </div>
        <div className="col-span-3 text-gray-500"></div>
        <div className="col-span-3 text-gray-500"></div>
      </div>
    </li>
  );
}
