'use client';

import { useState } from 'react';
import { Header } from './Header';
import { Navbar } from './Navbar';

export function Navigation() {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <Header setOpened={setOpened} />
      <Navbar opened={opened} setOpened={setOpened} />
    </>
  );
}
