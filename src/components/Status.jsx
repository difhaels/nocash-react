import React from "react";

export default function Status({data}) {
  return (
    <div className="mb-3">
      <h1 className="font-semibold">File Name:{data?.akun.nama}</h1>
      <h1 className="font-semibold">Last Change:</h1>
    </div>
  );
}
