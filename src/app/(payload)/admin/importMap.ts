import { CollectionCards } from "@payloadcms/next/rsc";
import { VercelBlobClientUploadHandler } from "@payloadcms/storage-vercel-blob/client";
import {
  BoldFeatureClient,
  FixedToolbarFeatureClient,
  HeadingFeatureClient,
  InlineToolbarFeatureClient,
  ItalicFeatureClient,
  LinkFeatureClient,
  ParagraphFeatureClient,
  UnderlineFeatureClient,
} from "@payloadcms/richtext-lexical/client";
import {
  LexicalDiffComponent,
  RscEntryLexicalCell,
  RscEntryLexicalField,
} from "@payloadcms/richtext-lexical/rsc";

export const importMap = {
  "@payloadcms/storage-vercel-blob/client#VercelBlobClientUploadHandler":
    VercelBlobClientUploadHandler,
  "@payloadcms/next/rsc#CollectionCards": CollectionCards,
  "@payloadcms/ui/rsc#CollectionCards": CollectionCards,
  "@payloadcms/richtext-lexical/rsc#RscEntryLexicalCell": RscEntryLexicalCell,
  "@payloadcms/richtext-lexical/rsc#RscEntryLexicalField": RscEntryLexicalField,
  "@payloadcms/richtext-lexical/rsc#LexicalDiffComponent": LexicalDiffComponent,
  "@payloadcms/richtext-lexical/client#InlineToolbarFeatureClient":
    InlineToolbarFeatureClient,
  "@payloadcms/richtext-lexical/client#FixedToolbarFeatureClient":
    FixedToolbarFeatureClient,
  "@payloadcms/richtext-lexical/client#HeadingFeatureClient": HeadingFeatureClient,
  "@payloadcms/richtext-lexical/client#LinkFeatureClient": LinkFeatureClient,
  "@payloadcms/richtext-lexical/client#BoldFeatureClient": BoldFeatureClient,
  "@payloadcms/richtext-lexical/client#ItalicFeatureClient": ItalicFeatureClient,
  "@payloadcms/richtext-lexical/client#UnderlineFeatureClient": UnderlineFeatureClient,
  "@payloadcms/richtext-lexical/client#ParagraphFeatureClient": ParagraphFeatureClient,
};
