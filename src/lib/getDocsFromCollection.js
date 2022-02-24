import { collection, getDocs } from 'firebase/firestore'

const getDocsFromCollection = (db, collectionName) => {
	const locationRef = collection(db, collectionName)
	let docData = []
	getDocs(locationRef)
		.then((snap) => {
			snap.docs.forEach(doc => {
				docData.push({ ...doc.data() })
			})
		})
		.catch(err => console.log(err.message))
	return docData
}

export default getDocsFromCollection