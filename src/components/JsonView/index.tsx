import ReactJson from 'react-json-view';

export const JsonView = ({ json }: { json: Object | Array<any> }) => {
    return (
        <ReactJson
            src={json}
            theme="brewer"
            enableClipboard={false}
            name={false}
            displayDataTypes={false}
            displayObjectSize={false}
            quotesOnKeys={false}
            style={{
                backgroundColor: 'transparent',
            }}
        />
    );
};
