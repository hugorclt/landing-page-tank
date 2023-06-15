export default async function getMissions() {
	const res = await fetch('https://tankserverdeploy-tpg5dhuatq-od.a.run.app/api/annoucement/useCaseAnnoucement');

	if (!res.ok) throw new Error('Failed to fetch latest missions');

	return res.json();
}