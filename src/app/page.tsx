'use client';
import { ColumnDef } from '@tanstack/react-table';
import Image from 'next/image';
import Table from '@/components/organisms/Table';
import products, { Product } from '@/utils/constants/products';

export default function Home() {
  const columns: ColumnDef<Product>[] = [
    {
      id: 'name',
      accessorKey: 'name',
      header: () => <span>Name</span>,
    },
    {
      id: 'price',
      accessorKey: 'price',
      header: () => <span>Price</span>,
    },
    {
      id: 'quality',
      accessorKey: 'quality',
      header: () => <span>Quality</span>,
    },
    {
      id: 'description',
      accessorKey: 'description',
      header: () => <span>Description</span>,
    },
    {
      id: 'imageUrl',
      accessorKey: 'imageUrl',
      header: () => <span>Image</span>,
      enableSorting: false,
      cell: info => (
        <Image
          src={info.getValue() as string}
          alt="Product"
          width={40}
          height={40}
          className="h-10 w-10"
        />
      ),
    },
  ];

  return (
    <main className="min-h-screen p-24">
      <Table columns={columns} data={products} />
    </main>
  );
}
