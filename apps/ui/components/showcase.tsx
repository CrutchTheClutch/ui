import { Block } from "@clutchd/block";
import { Divider } from "@clutchd/divider";
import * as React from "react";
import { Badge } from ".";

function Showcase({
  title,
  pkg,
  pkgType,
  description,
  rsc = true,
  stable = false,
  children,
}: {
  title: string;
  pkg: string;
  description?: string;
  pkgType?: "primitive" | "utility" | "ui" | "core" | "layout";
  rsc?: boolean;
  stable?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <Block className="my-6">
      <h2 className="inline-flex items-center text-3xl font-bold text-gray-900">
        {title}{" "}
        {stable ? (
          <Badge className="ml-3 mr-0 bg-green-50 text-green-600 ring-green-100">
            Stable
          </Badge>
        ) : (
          <Badge className="ml-3 mr-0 bg-red-50 text-red-600 ring-red-100">
            Unstable
          </Badge>
        )}
        {rsc ? (
          <Badge className="bg-blue-50 text-blue-600 ring-blue-100">
            Server
          </Badge>
        ) : (
          <Badge className="bg-purple-50 text-purple-600 ring-purple-100">
            Client
          </Badge>
        )}
      </h2>
      <div className="my-2 flex items-center font-mono italic text-gray-500">
        <p>{pkg}</p>
        {pkgType && (
          <>
            <p className="mx-3">•</p>
            <p>{pkgType}</p>
          </>
        )}
      </div>
      {description && <p className="pb-4 text-gray-700 ">{description}</p>}
      <Divider className="bg-gray-950" />
      {children ? (
        <div className="space-y-4 py-6">{children}</div>
      ) : (
        <div className="py-2" />
      )}
    </Block>
  );
}

export { Showcase };
