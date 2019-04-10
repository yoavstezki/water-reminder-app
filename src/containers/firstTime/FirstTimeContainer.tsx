import React, { Component } from 'react'
import { Button, Text } from 'react-native';
//@ts-ignore
import { Pages } from 'react-native-pages';
import { FirstPage, PageViewComponent } from '../../components';

// import RegistrationContainer from '../welcome/registration.container';

class FirstTimeContainer extends Component {

    _pages: any;

    static LAST_PAGE: number = 2;

    constructor(props: any) {
        super(props);

        this.state = {
            page: 0
        }
    }

    pagesRef = (ref: any) => {
        this._pages = ref;
    };


    onNext = () => {

        const { page }: any = this.state;

        if (page === FirstTimeContainer.LAST_PAGE) {
            // navigate to app
        }

        if (this._pages) {
            this._pages.scrollToPage(page + 1);
        }
    };


    render(): React.ReactNode {

        return (
            <>
                <Pages ref={this.pagesRef} onScrollEnd={(i: number) => this.setState({ page: i })}>
                    <PageViewComponent Contant={FirstPage} />
                    {/*<PageViewComponent Contant={RegistrationContainer} />*/}
                </Pages>

                <Button title='Next' onPress={this.onNext} />
            </>
        )
    }
}

export default FirstTimeContainer;
