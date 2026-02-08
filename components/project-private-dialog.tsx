'use client';

import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog';

const PRIVATE_MESSAGE =
	'This project is private. Please contact Reymark to learn more about it.';

type ProjectPrivateDialogProps = {
	open: boolean;
	onOpenChange: (open: boolean) => void;
};

export function ProjectPrivateDialog({ open, onOpenChange }: ProjectPrivateDialogProps) {
	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="sm:max-w-md">
				<DialogHeader>
					<DialogTitle>Private Project</DialogTitle>
					<DialogDescription>{PRIVATE_MESSAGE}</DialogDescription>
				</DialogHeader>
				<DialogFooter className="flex-row gap-2 sm:justify-end">
					<Button variant="outline" onClick={() => onOpenChange(false)}>
						Close
					</Button>
					<Button asChild>
						<Link href="/contact" onClick={() => onOpenChange(false)}>
							Contact Reymark
						</Link>
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
