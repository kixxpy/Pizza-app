import ContentLoader from 'react-content-loader';

const Skeleton = () => (
	<ContentLoader
		speed={2}
		width={323}
		height={230}
		viewBox="0 0 323 230"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb">
		<rect x="0" y="0" rx="8" ry="8" width="323" height="165" />
		<rect x="0" y="231" rx="8" ry="8" width="323" height="15" />
		<rect x="1" y="173" rx="8" ry="8" width="195" height="26" />
		<rect x="0" y="211" rx="8" ry="8" width="323" height="18" />
	</ContentLoader>
);

export default Skeleton;
