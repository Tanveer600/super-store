import React from 'react'

function Sidebar() {
  return (
     <div className="container-fluid">

                    <div id="two-column-menu">
                    </div>
                    <ul className="navbar-nav" id="navbar-nav">
                        <li className="menu-title"><span data-key="t-menu">Menu</span></li>
                        <li className="nav-item">
                            <a className="nav-link menu-link" to="/sidebarDashboards" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarDashboards">
                                <i className="bx bxs-dashboard"></i> <span data-key="t-dashboards">Dashboards</span>
                            </a>
                            <div className="collapse menu-dropdown" id="sidebarDashboards">
                                <ul className="nav nav-sm flex-column">
                                    <li className="nav-item">
                                        <a to="/dashboard-analytics.html" className="nav-link" data-key="t-analytics"> Analytics </a>
                                    </li>
                                    <li className="nav-item">
                                        <a to="/dashboard-crm.html" className="nav-link" data-key="t-crm"> CRM </a>
                                    </li>
                                    <li className="nav-item">
                                        <a to="/index.html" className="nav-link" data-key="t-ecommerce"> Ecommerce </a>
                                    </li>
                                    <li className="nav-item">
                                        <a to="/dashboard-crypto.html" className="nav-link" data-key="t-crypto"> Crypto </a>
                                    </li>
                                    <li className="nav-item">
                                        <a to="/dashboard-projects.html" className="nav-link" data-key="t-projects"> Projects </a>
                                    </li>
                                    <li className="nav-item">
                                        <a to="/dashboard-nft.html" className="nav-link" data-key="t-nft"> NFT</a>
                                    </li>
                                    <li className="nav-item">
                                        <a to="/dashboard-job.html" className="nav-link" data-key="t-job">Job</a>
                                    </li>
                                </ul>
                            </div>
                        </li> 
                        <li className="nav-item">
                            <a className="nav-link menu-link" to="/sidebarApps" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarApps">
                                <i className="bx bx-layer"></i> <span data-key="t-apps">Apps</span>
                            </a>
                            <div className="collapse menu-dropdown" id="sidebarApps">
                                <ul className="nav nav-sm flex-column">
                                    <li className="nav-item">
                                        <a to="/sidebarCalendar" className="nav-link" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarCalendar" data-key="t-calender">
                                            Calendar
                                        </a>
                                        <div className="collapse menu-dropdown" id="sidebarCalendar">
                                            <ul className="nav nav-sm flex-column">
                                                <li className="nav-item">
                                                    <a to="/apps-calendar.html" className="nav-link" data-key="t-main-calender"> Main Calender </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a to="apps-calendar-month-grid.html" className="nav-link" data-key="t-month-grid"> Month Grid </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <a to="/apps-chat.html" className="nav-link" data-key="t-chat"> Chat </a>
                                    </li>
                                    <li className="nav-item">
                                        <a to="/sidebarEmail" className="nav-link" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarEmail" data-key="t-email">
                                            Email
                                        </a>
                                        <div className="collapse menu-dropdown" id="sidebarEmail">
                                            <ul className="nav nav-sm flex-column">
                                                <li className="nav-item">
                                                    <a to="/apps-mailbox.html" className="nav-link" data-key="t-mailbox"> Mailbox </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a to="/sidebaremailTemplates" className="nav-link" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebaremailTemplates" data-key="t-email-templates">
                                                        Email Templates
                                                    </a>
                                                    <div className="collapse menu-dropdown" id="sidebaremailTemplates">
                                                        <ul className="nav nav-sm flex-column">
                                                            <li className="nav-item">
                                                                <a to="/apps-email-basic.html" className="nav-link" data-key="t-basic-action"> Basic Action </a>
                                                            </li>
                                                            <li className="nav-item">
                                                                <a to="/apps-email-ecommerce.html" className="nav-link" data-key="t-ecommerce-action"> Ecommerce Action </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <a to="/sidebarEcommerce" className="nav-link" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarEcommerce" data-key="t-ecommerce"> Ecommerce
                                        </a>
                                        <div className="collapse menu-dropdown" id="sidebarEcommerce">
                                            <ul className="nav nav-sm flex-column">
                                                <li className="nav-item">
                                                    <a to="/apps-ecommerce-products.html" className="nav-link" data-key="t-products"> Products </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a to="/apps-ecommerce-product-details.html" className="nav-link" data-key="t-product-Details"> Product Details </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a to="apps-ecommerce-add-product.html" className="nav-link" data-key="t-create-product"> Create Product </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a to="/apps-ecommerce-orders.html" className="nav-link" data-key="t-orders"> Orders </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a to="/apps-ecommerce-order-details.html" className="nav-link" data-key="t-order-details"> Order Details </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a to="/apps-ecommerce-customers.html" className="nav-link" data-key="t-customers"> Customers </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a to="/apps-ecommerce-cart.html" className="nav-link" data-key="t-shopping-cart"> Shopping Cart </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a to="apps-ecommerce-checkout.html" className="nav-link" data-key="t-checkout"> Checkout </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a to="/apps-ecommerce-sellers.html" className="nav-link" data-key="t-sellers"> Sellers </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a to="/apps-ecommerce-seller-details.html" className="nav-link" data-key="t-sellers-details"> Seller Details </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <a to="/sidebarProjects" className="nav-link" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarProjects" data-key="t-projects"> Projects
                                        </a>
                                        <div className="collapse menu-dropdown" id="sidebarProjects">
                                            <ul className="nav nav-sm flex-column">
                                                <li className="nav-item">
                                                    <a to="/apps-projects-list.html" className="nav-link" data-key="t-list"> List </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a to="/apps-projects-overview.html" className="nav-link" data-key="t-overview"> Overview </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a to="/apps-projects-create.html" className="nav-link" data-key="t-create-project"> Create Project </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <a to="/sidebarTasks" className="nav-link" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarTasks" data-key="t-tasks"> Tasks
                                        </a>
                                        <div className="collapse menu-dropdown" id="sidebarTasks">
                                            <ul className="nav nav-sm flex-column">
                                                <li className="nav-item">
                                                    <a to="/apps-tasks-kanban.html" className="nav-link" data-key="t-kanbanboard"> Kanban Board </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a to="/apps-tasks-list-view.html" className="nav-link" data-key="t-list-view"> List View </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a to="/apps-tasks-details.html" className="nav-link" data-key="t-task-details"> Task Details </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <a to="/sidebarCRM" className="nav-link" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarCRM" data-key="t-crm"> CRM
                                        </a>
                                        <div className="collapse menu-dropdown" id="sidebarCRM">
                                            <ul className="nav nav-sm flex-column">
                                                <li className="nav-item">
                                                    <a to="/apps-crm-contacts.html" className="nav-link" data-key="t-contacts"> Contacts </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a to="/apps-crm-companies.html" className="nav-link" data-key="t-companies"> Companies </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a to="/apps-crm-deals.html" className="nav-link" data-key="t-deals"> Deals </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a to="/apps-crm-leads.html" className="nav-link" data-key="t-leads"> Leads </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <a to="/sidebarCrypto" className="nav-link" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarCrypto" data-key="t-crypto"> Crypto
                                        </a>
                                        <div className="collapse menu-dropdown" id="sidebarCrypto">
                                            <ul className="nav nav-sm flex-column">
                                                <li className="nav-item">
                                                    <a to="/apps-crypto-transactions.html" className="nav-link" data-key="t-transactions"> Transactions </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a to="/apps-crypto-buy-sell.html" className="nav-link" data-key="t-buy-sell"> Buy & Sell </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a to="/apps-crypto-orders.html" className="nav-link" data-key="t-orders"> Orders </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a to="/apps-crypto-wallet.html" className="nav-link" data-key="t-my-wallet"> My Wallet </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a to="/apps-crypto-ico.html" className="nav-link" data-key="t-ico-list"> ICO List </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a to="/apps-crypto-kyc.html" className="nav-link" data-key="t-kyc-application"> KYC Application </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <a to="/sidebarInvoices" className="nav-link" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarInvoices" data-key="t-invoices"> Invoices
                                        </a>
                                        <div className="collapse menu-dropdown" id="sidebarInvoices">
                                            <ul className="nav nav-sm flex-column">
                                                <li className="nav-item">
                                                    <a to="/apps-invoices-list.html" className="nav-link" data-key="t-list-view"> List View </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a to="/apps-invoices-details.html" className="nav-link" data-key="t-details"> Details </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a to="/apps-invoices-create.html" className="nav-link" data-key="t-create-invoice"> Create Invoice </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <a to="/sidebarTickets" className="nav-link" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarTickets" data-key="t-supprt-tickets"> Support Tickets
                                        </a>
                                        <div className="collapse menu-dropdown" id="sidebarTickets">
                                            <ul className="nav nav-sm flex-column">
                                                <li className="nav-item">
                                                    <a to="/apps-tickets-list.html" className="nav-link" data-key="t-list-view"> List View </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a to="/apps-tickets-details.html" className="nav-link" data-key="t-ticket-details"> Ticket Details </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <a to="/sidebarnft" className="nav-link" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarnft" data-key="t-nft-marketplace">
                                            NFT Marketplace
                                        </a>
                                     /
                                    </li>
                                    <li className="nav-item">
                                        <a to="/apps-file-manager.html" className="nav-link"> <span data-key="t-file-manager">File Manager</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a to="/apps-todo.html" className="nav-link"> <span data-key="t-to-do">To Do</span></a>
                                    </li>
                                    <li className="nav-item">
                                       <a to="/sidebarjobs" className="nav-link" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarjobs" data-key="t-jobs"> Jobs</a>
                                        <div className="collapse menu-dropdown" id="sidebarjobs">
                                            <ul className="nav nav-sm flex-column">
                                                <li className="nav-item">
                                                    <a to="/apps-job-statistics.html" className="nav-link" data-key="t-statistics"> Statistics </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a to="/sidebarJoblists" className="nav-link" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarJoblists" data-key="t-job-lists">
                                                        Job Lists
                                                    </a>
                                                    <div className="collapse menu-dropdown" id="sidebarJoblists">
                                                        <ul className="nav nav-sm flex-column">
                                                            <li className="nav-item">
                                                                <a to="/apps-job-lists.html" className="nav-link" data-key="t-list"> List
                                                                </a>
                                                            </li>
                                                            <li className="nav-item">
                                                                <a to="/apps-job-grid-lists.html" className="nav-link" data-key="t-grid"> Grid </a>
                                                            </li>
                                                            <li className="nav-item">
                                                                <a to="/apps-job-details.html" className="nav-link" data-key="t-overview"> Overview</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                             
                                                    <a to="apps-job-categories.html" className="nav-link" data-key="t-job-categories"> Job Categories</a>
                                             
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <a to="/apps-api-key.html" className="nav-link" data-key="t-api-key">API Key</a>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link menu-link" to="/sidebarLayouts" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarLayouts">
                                <i className="bx bx-layout"></i> <span data-key="t-layouts">Layouts</span> <span className="badge badge-pill bg-danger" data-key="t-hot">Hot</span>
                            </a>
                            <div className="collapse menu-dropdown" id="sidebarLayouts">
                                <ul className="nav nav-sm flex-column">
                                    <li className="nav-item">
                                        <a to="/layouts-vertical.html" target="_blank" className="nav-link" data-key="t-vertical">Vertical</a>
                                    </li>
                                    <li className="nav-item">
                                        <a to="/layouts-detached.html" target="_blank" className="nav-link" data-key="t-detached">Detached</a>
                                    </li>
                                    <li className="nav-item">
                                        <a to="/layouts-two-column.html" target="_blank" className="nav-link" data-key="t-two-column">Two Column</a>
                                    </li>
                                    <li className="nav-item">
                                        <a to="/layouts-vertical-hovered.html" target="_blank" className="nav-link" data-key="t-hovered">Hovered</a>
                                    </li>
                                </ul>
                            </div>
                        </li> 

                        <li className="menu-title"><i className="ri-more-fill"></i> <span data-key="t-pages">Pages</span></li>

                        <li className="nav-item">
                            <a className="nav-link menu-link" to="/sidebarAuth" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarAuth">
                                <i className="bx bx-user-circle"></i> <span data-key="t-authentication">Authentication</span>
                            </a>
                            <div className="collapse menu-dropdown" id="sidebarAuth">
                                <ul className="nav nav-sm flex-column">
                                    <li className="nav-item">
                                        <a to="/sidebarSignIn" className="nav-link" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarSignIn" data-key="t-signin"> Sign In
                                        </a>
                                        <div className="collapse menu-dropdown" id="sidebarSignIn">
                                            <ul className="nav nav-sm flex-column">
                                                <li className="nav-item">
                                                    <a to="/auth-signin-basic.html" className="nav-link" data-key="t-basic"> Basic </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a to="/auth-signin-cover.html" className="nav-link" data-key="t-cover"> Cover </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                              
                                    <li className="nav-item">
                                        <a to="/sidebarLogout" className="nav-link" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarLogout" data-key="t-logout"> Logout
                                        </a>
                                        <div className="collapse menu-dropdown" id="sidebarLogout">
                                            <ul className="nav nav-sm flex-column">
                                                <li className="nav-item">
                                                    <a to="/auth-logout-basic.html" className="nav-link" data-key="t-basic"> Basic </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a to="/auth-logout-cover.html" className="nav-link" data-key="t-cover"> Cover </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <a to="/sidebarSuccessMsg" className="nav-link" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarSuccessMsg" data-key="t-success-message"> Success Message
                                        </a>
                                        <div className="collapse menu-dropdown" id="sidebarSuccessMsg">
                                            <ul className="nav nav-sm flex-column">
                                                <li className="nav-item">
                                                    <a to="/auth-success-msg-basic.html" className="nav-link" data-key="t-basic"> Basic </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a to="/auth-success-msg-cover.html" className="nav-link" data-key="t-cover"> Cover </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <a to="/sidebarTwoStep" className="nav-link" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarTwoStep" data-key="t-two-step-verification"> Two Step Verification
                                        </a>
                                        <div className="collapse menu-dropdown" id="sidebarTwoStep">
                                            <ul className="nav nav-sm flex-column">
                                                <li className="nav-item">
                                                    <a to="/auth-twostep-basic.html" className="nav-link" data-key="t-basic"> Basic </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a to="/auth-twostep-cover.html" className="nav-link" data-key="t-cover"> Cover </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                  
                                </ul>
                            </div>
                        </li>

                    

                        <li className="nav-item">
                            <a className="nav-link menu-link" to="/sidebarLanding" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarLanding">
                                <i className="ri-rocket-line"></i> <span data-key="t-landing">Landing</span>
                            </a>
                            <div className="collapse menu-dropdown" id="sidebarLanding">
                                <ul className="nav nav-sm flex-column">
                                    <li className="nav-item">
                                        <a to="/landing.html" className="nav-link" data-key="t-one-page"> One Page </a>
                                    </li>
                                    <li className="nav-item">
                                        <a to="/nft-landing.html" className="nav-link" data-key="t-nft-landing"> NFT Landing </a>
                                    </li>
                                    <li className="nav-item">
                                        <a to="/job-landing.html" className="nav-link" data-key="t-job">Job</a>
                                    </li>
                                </ul>
                            </div>
                        </li>

                 

                        <li className="nav-item">
                            <a className="nav-link menu-link" to="widgets.html">
                                <i className="bx bx-aperture"></i> <span data-key="t-widgets">Widgets</span>
                            </a>
                        </li>

                   

                    </ul>
                </div>
  )
}

export default Sidebar