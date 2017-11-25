export function memoizedMember( o, name, fn){
	var saved= o[ "_"+ name]
	if( saved!== false){
		return saved
	}
	var value= fn.call( o)
	Object.defineProperty( o, "_"+ name, {
		value
	})
	return value
}
export default memoizedMember
