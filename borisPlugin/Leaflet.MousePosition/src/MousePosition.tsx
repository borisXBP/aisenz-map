import leaflet from 'aisenz-map';
import * as L from "aisenz-map";
import React from 'react';
import ReactDOM from 'react-dom';


export const MousePositionControl = (props:any) => {
	const latlng = props.latlng.wrap();
	return (
		<React.Fragment>
			<div>{latlng.lat} {latlng.lng}</div>
		</React.Fragment>
	)
}

const ControlBase = (props:any) => {
	const [coords, setCoords] = React.useState(new leaflet.LatLng(0, 0));
	props.map.on({
		mousemove: (event) => {
			setCoords(event.latlng);
		},
		click: (event) => {
			setCoords(event.latlng);
			props.clickToCopy && navigator.clipboard.writeText(event.latlng.toString()).then(e => {
				console.log("Copied to Clipboard");
			});
		}
	});
	return (
		<props.control latlng={coords} />
	)
}

export class MousePosition extends leaflet.Control {
	_div: HTMLElement | null;
	control: any;
	clickToCopy: boolean

	constructor(options?: any) {
		super(options);
		this._div = null;
		this.control = options?.customComponent || MousePositionControl;
		this.clickToCopy = options?.clickToCopy || false;
	}

	onAdd = (map: leaflet.Map) => {
		this._div = leaflet.DomUtil.create("div", "custom-panel leaflet-bar");
		ReactDOM.render(
			<ControlBase map={map} control={this.control} clickToCopy={this.clickToCopy} />,
			this._div
		)
		return this._div;
	}
	onRemove = () => {
		console.log("Bye");
	}
}

//declare let L: any;
// @ts-ignore
L.MousePosition = MousePosition;