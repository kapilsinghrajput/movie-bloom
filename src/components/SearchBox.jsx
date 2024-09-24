'use client';

import { useRouter } from 'next/navigation'; 
import React, { useState } from 'react';

export default function SearchBox() {
  const [search, setSearch] = useState('');
  const router = useRouter();



  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${search}`);
    setSearch("")
  };

  return (
    <div className="w-full">
      <form className="flex p-2 md:px-20" onSubmit={handleSubmit}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search keyword..."
          className="w-full h-15 placeholder-gray-500 outline-none bg-transparent"
        />
        <button
          className="bg-red-300 font-semibold px-4 p-2 rounded-lg disabled:bg-transparent"
          disabled={search === ''}
        >
          Search
        </button>
      </form>
    </div>
  );
}
