"use client"

import {Editor, EditorContent, JSONContent, useEditor} from "@tiptap/react";
import {Button} from "@/components/ui/button";
import {Bold, Heading1, Heading2, Heading3, Italic, Redo, Strikethrough, Undo} from "lucide-react";
import {StarterKit} from "@tiptap/starter-kit";
import React from "react";

export const MenuBar = ({editor} : {editor : Editor | null}) => {
    if(!editor) { return null }

    return (
        <>
            <div className={"flex flex-wrap gap-2"}>
                <Button
                    type={"button"} size={"sm"}
                    onClick={() => editor?.chain().focus().undo().run()}
                    variant={editor.isActive('undo') ? "default" : "outline"}
                >
                    <Undo className={"h-4 w-4"} />
                </Button>
                <Button
                    type={"button"} size={"sm"}
                    onClick={() => editor?.chain().focus().redo().run()}
                    variant={editor.isActive('redo') ? "default" : "outline"}
                >
                    <Redo className={"h-4 w-4"} />
                </Button>
                <Button
                    type={"button"} size={"sm"}
                    onClick={() => editor?.chain().focus().toggleHeading({level: 1}).run()}
                    variant={editor.isActive('heading', {level: 1}) ? "default" : "outline"}
                >
                    <Heading1 className={"h-4 w-4"} />
                </Button>
                <Button
                    type={"button"} size={"sm"}
                    onClick={() => editor?.chain().focus().toggleHeading({level: 2}).run()}
                    variant={editor.isActive('heading', {level: 2}) ? "default" : "outline"}
                >
                    <Heading2 className={"h-4 w-4"} />
                </Button>
                <Button
                    type={"button"} size={"sm"}
                    onClick={() => editor?.chain().focus().toggleHeading({level: 3}).run()}
                    variant={editor.isActive('heading', {level: 3}) ? "default" : "outline"}
                >
                    <Heading3 className={"h-4 w-4"} />
                </Button>
                <Button
                    type={"button"} size={"sm"}
                    onClick={() => editor?.chain().focus().toggleBold().run()}
                    variant={editor.isActive('bold') ? "default" : "outline"}
                >
                    <Bold className={"h-4 w-4"} />
                </Button>
                <Button
                    type={"button"} size={"sm"}
                    onClick={() => editor?.chain().focus().toggleItalic().run()}
                    variant={editor.isActive('italic') ? "default" : "outline"}
                >
                    <Italic className={"h-4 w-4"}/>
                </Button>
                <Button
                    type={"button"} size={"sm"}
                    onClick={() => editor?.chain().focus().toggleStrike().run()}
                    variant={editor.isActive('strike') ? "default" : "outline"}
                >
                    <Strikethrough className={"h-4 w-4"} />
                </Button>
            </div>
        </>
    )
}

export function TextEditor({setJson, json}: {setJson : any, json: JSONContent | null}) {
    const editor = useEditor({
        extensions: [StarterKit],
        content: json ?? "<p>Ceci est le début d'un magnifique paragraphe.</p>",
        editorProps: {
            attributes: {
                class: 'prose'
            }
        },
        onUpdate: ({editor}) => {
            const json = editor.getJSON()
            setJson(json)
        }
    })
    return (
        <>
            <div className={""}>
                <MenuBar editor={editor} />
                <EditorContent editor={editor} className={"mt-3 border-2 rounded-md bg-muted/60 p-4 min-h-[200px]"}/>
            </div>
        </>
    )
}