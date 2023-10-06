export default async function getMissions() {
	const res = await fetch('http://localhost:3000/api/annoucement/useCaseAnnoucement');

	if (!res.ok) throw new Error('Failed to fetch latest missions');

	return res.json();
}