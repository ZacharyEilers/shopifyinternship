import APODImage from "../../models/APODImage";
import DateHelper from "../DateHelper";

export interface APIResponse {
    copyright: string,
    date: string,
    explanation: string,
    hdurl: string,
    media_type: string,
    service_version: string,
    title: string,
    url: string
}

const APODImageHelper = {
    fromAPI: (apiResponse: APIResponse) => {
        const { media_type, service_version, url, hdurl, date } = apiResponse;

        return {
            ...apiResponse,
            mediaType: media_type,
            serviceVersion: service_version,
            URL: url,
            hdURL: hdurl,
            date: DateHelper.fromDashedString(date),
            dateID: date
        } as APODImage
    }
}
export default APODImageHelper