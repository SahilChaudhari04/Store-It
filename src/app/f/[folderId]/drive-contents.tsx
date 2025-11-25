"use client";

import { ChevronRight } from "lucide-react";
import { FileRow, FolderRow } from "./file-row";
import type { files_table, folders_table } from "~/server/db/schema";
import Link from "next/link";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { UploadButton } from "~/components/uploadthing";
import { useRouter } from "next/navigation";
import { usePostHog } from "posthog-js/react";

export default function DriveContents(props: {
  files: (typeof files_table.$inferSelect)[];
  folders: (typeof folders_table.$inferSelect)[];
  parents: (typeof folders_table.$inferSelect)[];

  currentFolderId: number;
}) {
  const navigate = useRouter();
  const posthog = usePostHog();

  return (
    <div className="min-h-screen bg-gray-950 p-8 text-gray-100">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between border-b border-gray-800 pb-4">
          <div className="flex flex-col">
            <div className="flex items-center mb-1">
              <h1 className="text-2xl font-bold text-white mr-4">Store-It</h1>
              <div className="flex items-center text-sm">
                <Link
                  href="/drive"
                  className="mr-2 text-gray-400 hover:text-white transition-colors"
                >
                  My Drive
                </Link>
                {props.parents.map((folder) => (
                  <div key={folder.id} className="flex items-center">
                    <ChevronRight className="mx-2 text-gray-600" size={16} />
                    <Link
                      href={`/f/${folder.id}`}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {folder.name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-xs text-gray-500 italic">"The only clutter you have is postponed decisions."</p>
          </div>

          <div className="flex items-center gap-4">
            <UploadButton
              endpoint="driveUploader"
              onBeforeUploadBegin={(files) => {
                posthog.capture("files_uploading", {
                  fileCount: files.length,
                });
                return files;
              }}
              onClientUploadComplete={() => {
                navigate.refresh();
              }}
              input={{
                folderId: props.currentFolderId,
              }}
              appearance={{
                button:
                  "bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-500 transition-colors text-sm font-medium",
                allowedContent: "hidden",
              }}
              content={{
                button: "Upload New File",
              }}
            />
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>

        <div className="rounded-xl bg-gray-900 shadow-xl border border-gray-800 overflow-hidden">
          <div className="border-b border-gray-800 px-6 py-4 bg-gray-900/50">
            <div className="grid grid-cols-12 gap-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
              <div className="col-span-6">Name</div>
              <div className="col-span-2">Type</div>
              <div className="col-span-3">Size</div>
              <div className="col-span-1"></div>
            </div>
          </div>
          <ul className="divide-y divide-gray-800">
            {props.folders.map((folder) => (
              <FolderRow key={folder.id} folder={folder} />
            ))}
            {props.files.map((file) => (
              <FileRow key={file.id} file={file} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
